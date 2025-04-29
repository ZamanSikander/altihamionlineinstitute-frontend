import React from "react";
import { useParams } from "react-router-dom";
import Noorani_Qaida_with_Tajweed from "../Pages/Noorani_Qaida_with_Tajweed"
import Nazra_Quran_With_Tajweed from "../Pages/Nazra_Quran_With_Tajweed"
import Hifz_Quran_With_Tajweed from "../Pages/Hifz_Quran_With_Tajweed";
import Tajweed_Qirat_Course from "../Pages/Tajweed_Qirat_Course";
import Basic_Islamic from "../Pages/Basic_Islamic";
import Ahadees from "../Pages/Ahadees";
const CourseDetails = () => {
  const { id } = useParams();

  switch (id) {
    case "1":
      return <Noorani_Qaida_with_Tajweed />;
    case "2":
      return <Nazra_Quran_With_Tajweed />;
    case "3":
      return <Hifz_Quran_With_Tajweed />;
    case "4":
      return <Tajweed_Qirat_Course />;
    case "5":
      return <Basic_Islamic />;
    case "6":
      return <Ahadees />;
    default:
      return (
        <div className="p-8 text-center text-red-600 text-xl">
          Course not found.
        </div>
      );
  }
};

export default CourseDetails;
