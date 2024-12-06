import GitHubCalendar from "react-github-calendar";
import { Tooltip as MuiTooltip } from "@mui/material";

const minimalTheme = {
  dark: ["#0a192f", "#00fbff"],
};

const DaysICode = () => {
  return (
    <div className="mt-[5rem] flex flex-col items-center w-full">
      <h1 className="uppercase text-HeadingGray text-xl text-center mb-10 duration-200 transition-all hover:text-gray-200">
        Days I code
      </h1>
      <div className="w-[90vw] md:w-[70vw] lg:w-[72vw] md:px-[1.5rem] overflow-x-hidden scrollbar-hidden">
        <div className="scrollbar-hidden scrollbar-hide w-full mx-auto">
          <GitHubCalendar
            username="Abhishek-Maurya2"
            colorScheme="dark"
            blockSize={14}
            blockMargin={5}
            fontSize={16}
            className="bg-HeadingBlue"
            theme={minimalTheme}
            renderBlock={(block, activity) => (
              <MuiTooltip
                title={`${activity.count} activities on ${activity.date}`}
              >
                {block}
              </MuiTooltip>
            )}
          />
        </div>
      </div>
    </div>
  );
};

export default DaysICode;
