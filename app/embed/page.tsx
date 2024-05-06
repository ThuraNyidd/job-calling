import { SelectScrollable } from "@/components/ui/custom/select-dropdown";
import Image from "next/image";
import { Button } from "@/components/ui/button"
import { DataTableDemo } from "@/components/ui/custom/data-table";
import Logo from '@/public/logo.svg';
import {Poppins} from 'next/font/google';
import { cn } from "@/lib/utils";


const poppins = Poppins({
    subsets: ['latin'],
    weight: "400"
});


export default function Home() {
  return (
   <div className="w-full border rounded p-3">
    <div className="bg-white p-3 items-center drop-shadow-xl gap-4 flex justify-between  bg-gradient-to-r from-cyan-500 to-blue-500">
    <SelectScrollable />
    <SelectScrollable />
    <SelectScrollable />
    <Button className="h-[40px] rounded-sm"  variant={'outline'} size={'lg'}>Search</Button>
    </div>
    <div className="p-3">
    <DataTableDemo/>
    </div>
    <div className=" gap-2 rounded flex flex-col items-center justify-center p-3 py-5 ">
    <Image alt="logo" src={Logo} width={45} height={45}/>
        <p className={cn(" text-sm ",poppins.className)}>Power by SSHR</p>
    </div>
   </div>
  );
}
