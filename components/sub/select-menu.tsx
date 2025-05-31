import React from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface DataProps {
  data: string[];
}
const SelectMenu: React.FC<DataProps> = ({data}) => {
  return (
    <Select>
      <SelectTrigger className="w-full">
        <SelectValue  placeholder={data[0]}/>
      </SelectTrigger>
      <SelectContent>
        {data.map((Item,i)=>(

        <SelectItem key={i} value={Item}>{Item}</SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
};

export default SelectMenu;
