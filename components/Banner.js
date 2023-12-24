import Image from 'next/image';

const Banner = () => {
  return (
    <div className="relative h-[300px] sm:h-[400px] lg:h-[500px] xl:h-[600px] 2xl:h-[700px]">
      <Image
        src="/img/banner.webp"
        alt="Banner"
        layout="fill"
        objectFit="cover"
        priority
      />

     
    </div>
  );
};

export default Banner;