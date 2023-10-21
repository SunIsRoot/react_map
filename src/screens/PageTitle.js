import { Helmet } from "react-helmet-async";
import PropTypes from "prop-types";

function PageTitle({ title }) {
  return <Helmet>{title} | Instaclone</Helmet>;
}

PageTitle.prototypes = {
  title: PropTypes.string.isRequired,
};

export default PageTitle;
