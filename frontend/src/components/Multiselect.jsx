import Select from "react-select";
import { useController } from "react-hook-form";


const MultiSelect = ({
    options,
    control,
    name,
    loading,
    placeholder,
    isFilter
}) => {
    const {
        field: { onChange, onBlur, value, ref },
    } = useController({
        control,
        name,
        defaultValue: [],
    });

    const customStyles = {
        control: (provided) => ({
            ...provided,
            border: "none",
            // borderBottom: "1px solid #ccc",
            borderRadius: 0,
            boxShadow: "none",
            "&:hover": {
                border: "none",
                cursor: "pointer"
            },
        }),
        indicatorSeparator: () => ({
            display: "none",
        }),
        option: (provided, state) => ({
            ...provided,
            backgroundColor: state.isFocused ? "lightgray" : "white",
            color: "black",

        }),
        multiValue: (provided) => ({
            ...provided,
            backgroundColor: "lightgray",
        }),
        multiValueRemove: (provided) => ({
            ...provided,
            ":hover": {
                backgroundColor: "red",
                color: "white",
            },
        }),
    };

    const handleSelectChange = (selectedOptions) => {
        if (selectedOptions) {

            onChange((selectedOptions).map((option) => option.value));

        } else {
            onChange([]);
        }
    };

    return (
        <div>
            <Select
                isMulti
                className={`w-[220px] text-sm  rounded-md border border-[#DADADA] bg-background px-0 py-1 ${isFilter && ' border-b border-t-0 border-l-0 border-r-0  rounded-none !py-0 pb-1 border-input hover:border-primary px-0 focus:outline-none !w-60'}`}
                classNamePrefix="select"
                isDisabled={loading}
                options={[...options]}
                onChange={handleSelectChange}
                value={[...options].filter((option) =>
                    value.includes(option.value)
                )}
                placeholder={placeholder}
                onBlur={onBlur}
                ref={ref}
                styles={customStyles}
            />
        </div>
    );
};

export default MultiSelect;
