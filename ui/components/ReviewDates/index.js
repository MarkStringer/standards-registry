import parseISO from 'date-fns/parseISO';
import format from 'date-fns/format';

const date = (val) => format(parseISO(val), 'dd MMMM yyyy');

export default function ReviewDates({ data }) {
  const {
    // metadata_created,
    metadata_modified,
  } = data;
  return (
    <p className="nhsuk-body-s nhsuk-u-secondary-text-color nhsuk-u-margin-top-7 nhsuk-u-margin-bottom-0 nhsuk-u-font-size-16 secondary-text">
      {/* Page created: {date(metadata_created)} */}
      {/* <br /> */}
      Page last reviewed: {date(metadata_modified)}
      <br />
      Next review due: 25 November 2022
    </p>
  );
}
