import { FC, useCallback, useEffect, useState } from "react";
import LeftArrow from "../../public/icons/LeftArrow";
import RightArrow from "../../public/icons/RightArrow";

const testi = [
  // Testimonial untuk SevenPro (Parfum & Serum)
  {
    speech:
      "SevenPro Parfume benar-benar tahan lama! Saya menggunakannya sepanjang hari dan wanginya tetap segar. Aroma elegan dan eksklusif, sangat cocok untuk acara formal maupun santai.",
    name: "Andi",
    occupation: "Entrepreneur",
  },
  {
    speech:
      "Saya sudah mencoba berbagai parfum, tetapi SevenPro punya karakter aroma yang unik dan premium. Tidak menyengat dan sangat nyaman digunakan sehari-hari.",
    name: "Jessica",
    occupation: "Fashion Influencer",
  },
  {
    speech:
      "Serum SevenPro membantu kulit saya tampak lebih cerah dan lembap. Teksturnya ringan dan cepat meresap, tidak lengket sama sekali!",
    name: "Rina",
    occupation: "Beauty Enthusiast",
  },
  {
    speech:
      "Saya mengalami masalah kulit kusam dan setelah rutin memakai SevenPro Serum, kulit saya terasa lebih sehat dan glowing.",
    name: "Kevin",
    occupation: "Model",
  },

  // Testimonial untuk MSI
  {
    speech:
      "MSI Propolis sangat membantu daya tahan tubuh saya. Sejak mengonsumsinya secara rutin, saya jarang sakit dan merasa lebih fit!",
    name: "Budi",
    occupation: "Freelancer",
  },
  {
    speech:
      "Saya suka MSI Diamond Beauty Skincare, produk ini benar-benar membuat kulit saya lebih halus dan cerah. Paketnya lengkap dan cocok untuk perawatan harian.",
    name: "Lina",
    occupation: "Makeup Artist",
  },
  {
    speech:
      "Ulive Beauty Body Serum dari MSI sangat bagus! Kulit saya terasa lebih lembut dan terlihat lebih cerah setelah pemakaian rutin.",
    name: "Dewi",
    occupation: "Content Creator",
  },
  {
    speech:
      "MSI Gold Beauty Collagen membantu kulit saya lebih kenyal dan tampak sehat. Rasanya enak dan mudah dikonsumsi setiap hari.",
    name: "Siti",
    occupation: "Office Worker",
  },

  // Testimonial untuk MudahDigital
  {
    speech:
      "Saya menggunakan MudahDigital untuk semua kebutuhan pekerjaan saya, dan platform ini sangat mempermudah dalam mengelola data serta memberikan hasil yang sangat memuaskan.",
    name: "Fahmi",
    occupation: "Project Manager",
  },
  {
    speech:
      "MudahDigital memberikan solusi praktis dan efisien. Alat dan layanan yang mereka tawarkan sangat membantu dalam mempercepat pekerjaan saya.",
    name: "Amira",
    occupation: "IT Specialist",
  },
  {
    speech:
      "Dengan MudahDigital, saya bisa memantau perkembangan bisnis secara real-time. Ini benar-benar meningkatkan produktivitas kami.",
    name: "Agus",
    occupation: "Business Owner",
  },
  {
    speech:
      "Pelayanan MudahDigital sangat responsif dan inovatif. Fitur yang ditawarkan sangat mendukung operasional bisnis kami, membuat segalanya lebih mudah.",
    name: "Rosa",
    occupation: "Marketing Executive",
  },
];

const ITEMS_PER_SLIDE = 4;

const TestiSlider: FC = () => {
  const [arrIndex, setArrIndex] = useState(0);
  const [animate, setAnimate] = useState("animate__lightSpeedInRight");

  const handleNext = useCallback(() => {
    if (arrIndex + ITEMS_PER_SLIDE >= testi.length) {
      setArrIndex(0);
    } else {
      setArrIndex((prevState) => prevState + ITEMS_PER_SLIDE);
      setAnimate("animate__lightSpeedInRight");
    }
  }, [arrIndex]);

  const handlePrev = () => {
    if (arrIndex === 0) {
      setArrIndex(testi.length - ITEMS_PER_SLIDE);
    } else {
      setArrIndex((prevState) => prevState - ITEMS_PER_SLIDE);
      setAnimate("animate__lightSpeedInLeft");
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 4000);
    return () => clearInterval(interval);
  }, [handleNext]);

  return (
    <div className="flex flex-1 overflow-hidden relative my-6 w-full">
      <div className="slide-section h-full grid grid-cols-4">
        {testi.slice(arrIndex, arrIndex + ITEMS_PER_SLIDE).map((ti) => (
          <div
            key={ti.name}
            className={`h-full flex flex-col items-center justify-center animate__animated ${animate}`}
          >
            <div className="textiContainer text-center w-3/4">
              <span>{ti.speech}</span>
              <h3 className="font-bold mt-6">{ti.name}</h3>
              <span className="text-sm">({ti.occupation})</span>
            </div>
          </div>
        ))}
      </div>
      <span
        className="absolute top-1/3 left-3 hover:bg-grey200 rounded-full p-2 cursor-pointer outline-none"
        onClick={handlePrev}
      >
        <LeftArrow />
      </span>
      <span
        className="absolute top-1/3 right-5 hover:bg-grey200 rounded-full p-2 cursor-pointer outline-none"
        onClick={handleNext}
      >
        <RightArrow />
      </span>
    </div>
  );
};

export default TestiSlider;
