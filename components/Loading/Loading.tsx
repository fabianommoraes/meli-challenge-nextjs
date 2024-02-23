import Backdrop from "@mui/material/Backdrop";
import { StyledProgress } from "./Loading.styles";
import { useSelector } from "react-redux";
import { getIsLoading } from "../../redux/monstersSlice";

const Loading = () => {
  const isLoading = useSelector(getIsLoading);

  return (
    <Backdrop data-testid="loading" open={isLoading}>
      <StyledProgress />
    </Backdrop>
  );
};

export default Loading;
