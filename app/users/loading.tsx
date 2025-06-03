import { Loader2 } from "lucide-react";
import React from "react";

const loading = () => {
  return (
    <div className="animate-spin h-screen w-full flex items-center justify-center">
      <Loader2 size={30}/>
    </div>
  );
};

export default loading;
