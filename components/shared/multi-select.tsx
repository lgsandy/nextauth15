"use client";

import * as React from "react";
import { Check, ChevronsUpDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

type MultiSelectProps<T> = {
  options: T[];
  selectedValues: string[];
  onChange: (selected: string[] | T[]) => void;
  returnObjects?: boolean;
  placeholder?: string;
  width?: string;
  valueKey: keyof T;
  labelKey: keyof T;
};

const MultiSelect = <T,>({
  options,
  selectedValues,
  onChange,
  returnObjects = false,
  placeholder = "Select options...",
  width = "w-[480px]",
  valueKey,
  labelKey,
}: MultiSelectProps<T>) => {
  const [open, setOpen] = React.useState(false);

  const handleSelect = (val: string) => {
    let updatedSelection;
    if (selectedValues.includes(val)) {
      updatedSelection = selectedValues.filter((item) => item !== val);
    } else {
      updatedSelection = [...selectedValues, val];
    }
    onChange(
      returnObjects
        ? updatedSelection.map((v) => options.find((o) => o[valueKey] === v)!)
        : updatedSelection
    );
  };

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className={`${width} justify-between`}
        >
          <div className="flex gap-2 justify-start">
            {selectedValues.length
              ? selectedValues.map((val, i) => {
                  const selectedOption = options.find(
                    (option) => option[valueKey] === val
                  );
                  return (
                    <div
                      key={i}
                      className="px-2 py-1 rounded-xl border bg-slate-200 text-xs font-medium"
                    >
                      {selectedOption?.[labelKey] as string}
                    </div>
                  );
                })
              : placeholder}
          </div>
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className={`${width} p-0`}>
        <Command>
          <CommandInput placeholder="Search..." />
          <CommandEmpty>No options found.</CommandEmpty>
          <CommandGroup>
            <CommandList>
              {options.map((option) => (
                <CommandItem
                  key={option[valueKey] as string}
                  value={option[valueKey] as string}
                  onSelect={() => handleSelect(option[valueKey] as string)}
                >
                  <Check
                    className={cn(
                      "mr-2 h-4 w-4",
                      selectedValues.includes(option[valueKey] as string)
                        ? "opacity-100"
                        : "opacity-0"
                    )}
                  />
                  {option[labelKey] as string}
                </CommandItem>
              ))}
            </CommandList>
          </CommandGroup>
        </Command>
      </PopoverContent>
    </Popover>
  );
};

export default MultiSelect;
