import DashboardSidebar from "../Components/DashboardSidebar";
import React, { FormEvent, useEffect, useState } from "react";
import { Grid, Icon, Form, Tab, Message } from "semantic-ui-react";
import { IReport, IReportFormState } from "../Data/report";
import {
  addWeeks,
  endOfWeek,
  format,
  getDaysInMonth,
  startOfWeek,
} from "date-fns";
import ExportExcel from "@/utils/ExcelExport";

const Reports: React.FC = () => {
  const [formData, setFormData] = useState<IReportFormState | any>({
    year: "",
    month: "",
    week: "",
    gender: "",
  });

  const getNumberOfWeeksInMonth = () => {
    const month = !!formData.month ? formData.month : new Date().getMonth();
    // Get the start of the month
    const startOfMonth = startOfWeek(
      new Date(new Date().getFullYear(), month, 1)
    );

    // Calculate the number of days in the month
    const numberOfDaysInMonth = getDaysInMonth(
      new Date(new Date().getFullYear(), month + 1, 0)
    );

    // Calculate the number of weeks in the month
    const numberOfWeeksInMonth = Math.ceil(
      (numberOfDaysInMonth - startOfMonth.getDay()) / 7
    );

    // Return the number of weeks in the month
    return numberOfWeeksInMonth;
  };

  const [options, setOptions] = useState<
    { key: number; text: string; value: number }[]
  >([]);

  const [numberOfWeeksInCurrentMonth, setNumberOfWeeksInSelectedMonth] =
    useState(getNumberOfWeeksInMonth());

  useEffect(() => {
    const newOptions = [{ key: 0, text: "All Weeks", value: 0 }];
    for (let i = 1; i <= numberOfWeeksInCurrentMonth; i++) {
      newOptions.push({
        key: i,
        text: `Week ${i}`,
        value: i,
      });
    }

    setOptions(newOptions);
  }, [numberOfWeeksInCurrentMonth]);

  const yearOptions = [
    { key: "2020", text: "2020", value: "2020" },
    { key: "2021", text: "2021", value: "2021" },
    { key: "2022", text: "2022", value: "2022" },
    { key: "2023", text: "2023", value: "2023" },
  ];
  const monthOptions = [
    { key: "Jan", text: "January", value: "1" },
    { key: "Feb", text: "February", value: "2" },
    { key: "Mar", text: "March", value: "3" },
    { key: "Apr", text: "April", value: "4" },
    { key: "May", text: "May", value: "5" },
    { key: "Jun", text: "June", value: "6" },
    { key: "Jul", text: "July", value: "7" },
    { key: "Aug", text: "August", value: "8" },
    { key: "Sep", text: "September", value: "9" },
    { key: "Oct", text: "October", value: "10" },
    { key: "Nov", text: "November", value: "11" },
    { key: "Dec", text: "December", value: "12" },
  ];
  const genderOptions = [
    { key: "A", text: "All", value: "all" },
    { key: "M", text: "Male", value: "male" },
    { key: "F", text: "Female", value: "female" },
  ];

  const handleYearChange = (
    _e: React.SyntheticEvent<HTMLElement, Event>,
    data: any
  ) => {
    setFormData({
      ...formData,
      year: data.value,
    });
  };

  const handleMonthChange = (
    _e: React.SyntheticEvent<HTMLElement, Event>,
    data: any
  ) => {
    setFormData({
      ...formData,
      month: data.value,
    });

    setNumberOfWeeksInSelectedMonth(getNumberOfWeeksInMonth());
  };

  const handleWeekChange = (
    _e: React.SyntheticEvent<HTMLElement, Event>,
    data: any
  ) => {
    setFormData({
      ...formData,
      week: data.value,
    });
  };
  const handleGenderChange = (
    _e: React.SyntheticEvent<HTMLElement, Event>,
    data: any
  ) => {
    setFormData({
      ...formData,
      gender: data.value,
    });
  };

  const getFirstAndLastWeekDate = () => {
    const year = formData.year;
    const month = formData.month; // October
    const week = formData.week - 1; // October

    // Calculate the first day of the month
    const firstDayOfMonth = new Date(year, month - 1, 1);

    // Calculate the start date by given week
    const startDateOfSecondWeek = addWeeks(startOfWeek(firstDayOfMonth), week);

    // Calculate the end date of the second week
    const endDateOfSecondWeek = endOfWeek(
      addWeeks(startOfWeek(firstDayOfMonth), week)
    );

    const formattedStartDate = format(startDateOfSecondWeek, "yyyy-MM-dd");
    const formattedEndDate = format(endDateOfSecondWeek, "yyyy-MM-dd");

    return { startDate: formattedStartDate, endDate: formattedEndDate };
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const dates = getFirstAndLastWeekDate();
    const data = {
      startDate: dates.startDate,
      endDate: dates.endDate,
      gender: formData.gender,
    };
    const reports = (await window.api.getReports(data)) as IReport | any;
    console.log(reports);

    ExportExcel(reports, "giving-reports");
  };

  const panes = [
    {
      menuItem: "Create Report",
      render: () => (
        <Tab.Pane attached={false}>
          <Message
            success
            header="Report Generated"
            content="You've successfully generated a report, you can locate the report file in your Downloads folder."
          />
          <Form>
            <Form.Group widths="equal">
              <Form.Select
                fluid
                label="Year"
                options={yearOptions}
                value={formData.year}
                placeholder="Select Year"
                onChange={handleYearChange}
              />
              <Form.Select
                fluid
                label="Month"
                options={monthOptions}
                value={formData.month}
                placeholder="Select Month"
                onChange={handleMonthChange}
              />
            </Form.Group>

            <Form.Group widths="equal">
              <Form.Select
                fluid
                label="Week"
                options={options}
                value={formData.week}
                placeholder="Select Week"
                onChange={handleWeekChange}
              />

              <Form.Select
                fluid
                label="Gender"
                options={genderOptions}
                value={formData.gender}
                placeholder="Select Gender"
                onChange={handleGenderChange}
              />
            </Form.Group>
            <Form.Button onClick={handleSubmit} positive>
              Generate
            </Form.Button>
          </Form>
        </Tab.Pane>
      ),
    },
    {
      menuItem: "Recent Reports",
      render: () => <Tab.Pane attached={false}>Tab 2 Content</Tab.Pane>,
    },
  ];

  return (
    <div>
      <DashboardSidebar />
      <Grid className="px-4 py-2">
        <Grid.Column>
          <div className="header-block">
            <Grid columns="equal">
              <Grid.Column>
                <h3>Reports</h3>
              </Grid.Column>
              <Grid.Column floated="right">
                <Icon name="calendar alternate" />
                17 September 2023 - 23 September 2023
              </Grid.Column>
            </Grid>
          </div>

          <Grid columns="equal">
            <Grid.Column>
              <Tab menu={{ secondary: true, pointing: true }} panes={panes} />
            </Grid.Column>
          </Grid>
        </Grid.Column>
      </Grid>
    </div>
  );
};

export default Reports;
