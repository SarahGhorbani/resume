import { FC } from "react";

type Props = {
  school: string;
  degree?: string;
  field: string;
  startDate: string;
  endDate?: string;
};

const School = ({ school }: any) => (
  <h3 className="mk-general-item-title">{school}</h3>
);

const Degree = ({ degree }: any) => {
  return <span>{degree} - &nbsp;</span>;
};

const Field = ({ field }: any) => {
  return <span>{field}</span>;
};

const Date = ({ startDate, endDate }: any) => {
  return (
    <span className="mk-general-item-sub-title" style={{ display: "block" }}>
      {startDate} - {endDate || "Present"}
    </span>
  );
};

const Education: FC<Props> = ({
  school,
  degree,
  field,
  startDate,
  endDate,
}) => (
  <div>
    <School school={school} />
    <Date startDate={startDate} endDate={endDate} />
    {degree && <Degree degree={degree} />}
    <Field field={field} startDate={startDate} endDate={endDate} />
  </div>
);

export default Education;
