import { Button } from "@ui5/webcomponents-react";

type ApplyFilterButtonProps = {
    value: {
        syncId: number;
        typeOfControlsId: number;
        startDate: string;
        endDate: string;
    };
};

const ApplyFilterButton = ({ value }: ApplyFilterButtonProps) => {
    const handleFilterButtonClick = () => {
        console.log("Filter Values", value);
    };
    return (
        <Button
            onClick={handleFilterButtonClick}
            className="ml-2 p-2"
            tooltip="Apply Filters"
            design="Emphasized"
        >
            Apply Filter
        </Button>
    );
};

export default ApplyFilterButton;
