import axiosInstance from "./AxiosInstance.api"
// import axiosPublicInstance from "./AxiosPublicInstance.api";

/* -------------------------------------------------------------------------- */
/*                         all Search programs filter                         */
/* -------------------------------------------------------------------------- */
//
//
//
/* --------------------- fetch all countries GET request -------------------- */
export const countryList = () => axiosInstance.get("country-list");
/* --------------------- fetch all universities GET request -------------------- */
export const universityList = () => axiosInstance.get("university-list");
/* --------------------- fetch all course level GET request -------------------- */
export const courseLevel = () => axiosInstance.get("course-level-list");
/* --------------------- fetch all programs GET request -------------------- */
export const programsList = () => axiosInstance.get("program-list");

// 
// 
/* -------------------------------------------------------------------------- */
/*                           all programs card data                           */
/* -------------------------------------------------------------------------- */
// 
// 

/* --------------------- fetch all programs GET request -------------------- */
export const programsCardData = () => axiosInstance.get("all-programs ");
export const programsDetail = (id) => axiosInstance.get(`programs/${id}`);

/* --------------------- verify Student detail POST request -------------------- */
export const verifyStudentDetails = (email, mobile) => axiosInstance.post(`verify-student-details?email=${email}&mobile_no=${mobile}`);

/* --------------------- Store Walkin Details POST request -------------------- */
export const storeWalkinDetails = (formData) =>
    axiosInstance.post("store-walkin-details", null, {
        params: {
            first_name: formData.firstName,
            last_name: formData.lastName,
            email: formData.email,
            mobile_no: formData.mobile,
            coaching_required: formData.coaching,
            prefer_country: formData.country,
            is_test_given: formData.exam,
            visa_type: formData.visaType,
            exam_id: String(formData.examType),
            test_given: formData.test_given
        },
    });

/* --------------------- fetch exam list GET request -------------------- */
export const getExamList = () => axiosInstance.get("exam-list");

