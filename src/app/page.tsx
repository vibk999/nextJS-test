import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Image src={"https://movienew.cybersoft.edu.vn/hinhanh/lat-mat-48h_gp01.jpg"} width={500} height={500}
        alt="lat mat 8" />
      <Image
        src={"/images/traitim.gif"}
        width={500}
        height={500}
        alt="trái tim "
      />
    </div>
  );
}
