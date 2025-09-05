import { useEffect, useState } from "react";
import Select from "react-select";
import { fetchExamList, postStoreWalkinDetails } from "../../../api/ApiCallHandler.api";
import { useNavigate } from "react-router";

export default function StudentForm({ email, mobile, onBack }) {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: email || "",
    mobile: mobile || "",
    coaching: "",
    country: [],
    visaType: "",
    examType: "",
    test_given: ""
  });
  const [errors, setErrors] = useState({});
  const [alert, setAlert] = useState();
  const [examList, setExamList] = useState([]);
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [countries, setCountries] = useState([
    { value: "IN", label: "India" },
    { value: "US", label: "United States" },
    { value: "CA", label: "Canada" },
    { value: "GB", label: "United Kingdom" },
    { value: "AU", label: "Australia" },
    { value: "DE", label: "Germany" },
    { value: "FR", label: "France" },
    { value: "JP", label: "Japan" },
  ]);

  /* -------------------------------------------------------------------------- */
  /*                        for fetching program detail data                    */
  /* -------------------------------------------------------------------------- */
  useEffect(() => {
    const fetchExamListAPI = async () => {
      const examListResp = await fetchExamList();
      setExamList(examListResp?.data);
    }
    fetchExamListAPI();
  }, []);

  const handleChange = (e) => {
    setErrors({
      ...errors,
      [e.target.name]: null
    });

    let { name, value } = e.target;
    if (name == 'examType') {
      const examName = (examList || [])?.filter((item) => item.id == value);
      const value2 = examName?.[0]?.title;
      setFormData({ ...formData, [name]: value, test_given: value2 });
      return;
    }
    if (name === "mobile") {
      value = value.replace(/\D/g, "");
    }
    setFormData({ ...formData, [name]: value });
  };

  const validate = () => {
    let newErrors = {};

    if (!formData.firstName.trim()) newErrors.firstName = "First name required";

    if (!formData.email) {
      newErrors.email = "Email required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Enter a valid email";
    }

    if (!formData.mobile) {
      newErrors.mobile = "Mobile number required";
    } else if (!/^\d+$/.test(formData.mobile)) {
      newErrors.mobile = "Enter valid mobile number";
    }

    if (!formData.coaching) newErrors.coaching = "Please select an option";

    if (!formData.country || formData.country.length === 0) {
      newErrors.country = "Country preference required";
    }
    if (!formData.visaType) newErrors.visaType = "Please select a visa type";

    if (!formData.exam) newErrors.exam = "Please select an exam";

    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      const countriesName = formData?.country?.map((data) => data.label);
      const allData = {
        ...formData,
        'mobile no': formData?.mobile,
        country: countriesName
      }
      await postStoreWalkinDetails(allData, setAlert);
      setIsModalOpen(true);
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        mobile: "",
        coaching: "",
        country: [],
        exam: "",
        visaType: "",
        examType: "",
        exam_id: "",
        test_given: ""
      });
      setErrors({});
      // onBack();
      // navigate('../dashboard');
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
    onBack();
  };

  function selectedCountries(e) {
    setFormData({ ...formData, country: e });
    setErrors({
      ...errors,
      country: null
    });
  }

  return (
    <>
      <div className="flex  items-center justify-center min-h-screen bg-gray-100">
        <form
          onSubmit={handleSubmit}
          className="bg-white p-6 space-y-4 rounded-2xl shadow-md w-full max-w-md"
        >
          {/* First Name & Last Name */}
          <div className="flex flex-col space-y-3">
            <div className="flex flex-col items-center mb-6">
              <img
                src="/logo/study_abroad.svg"
                alt="Study Abroad"
                className="h-12 mb-2"
              />
              <h2 className="text-center text-lg text-black">
                Welcome to <span className="font-semibold">STUDY ABROAD</span>
              </h2>
            </div>
            <label className="text-lg font-medium mb-2">
              Name <span className="text-red-600">*</span>
            </label>
            <input
              type="text"
              name="firstName"
              placeholder="First Name"
              value={formData.firstName}
              onChange={handleChange}
              className="p-2 border rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-400"
            />
            {errors.firstName && (
              <p className="text-red-600 text-sm">{errors.firstName}</p>
            )}

            <input
              type="text"
              name="lastName"
              placeholder="Last Name"
              value={formData.lastName}
              onChange={handleChange}
              className="p-2 border rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-400"
            />
            {errors.lastName && (
              <p className="text-red-600 text-sm">{errors.lastName}</p>
            )}
          </div>

          {/* Email */}
          <div>
            <label className="block text-lg font-medium mb-2">
              Email <span className="text-red-600">*</span>
            </label>
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-2 border rounded-lg bg-gray-100 focus:ring-blue-400 focus:ring-1 focus:outline-none"
            />
            {errors.email && (
              <p className="text-red-600 text-sm">{errors.email}</p>
            )}
          </div>

          {/* Mobile Number */}
          <div>
            <label className="block text-lg font-medium mb-2">
              Mobile Number <span className="text-red-500">*</span>
            </label>
            <div className="flex">
              {/* <span className="flex items-center px-3 bg-gray-100 border border-r-0 rounded-l-lg text-gray-600 text-lg">
                +91
              </span> */}
              <select
                className="flex items-center px-3 bg-gray-100 border border-r-0 border-gray-300 rounded-l-lg text-gray-600 text-lg focus:outline-none"
                defaultValue="+91"
              >
                <option value="+91">+91</option>
                <option value="+1">+1</option>
                <option value="+44">+44</option>
                <option value="+61">+61</option>
                <option value="+81">+81</option>
              </select>
              <input
                type="text"
                name="mobile"
                value={formData.mobile}
                onChange={handleChange}
                // maxLength="10"
                placeholder="9815344898"
                className="flex-1 px-3 py-2 border rounded-r-lg focus:outline-none focus:ring-1 focus:ring-blue-400"
              />
            </div>
            {errors.mobile && (
              <p className="text-red-500 text-sm">{errors.mobile}</p>
            )}
          </div>

          {/* Coaching Required */}
          <div>
            <label className="block text-lg font-medium mb-2">
              Coaching Required? <span className="text-red-600">*</span>
            </label>
            <select
              name="coaching"
              value={formData.coaching}
              onChange={handleChange}
              className="w-full p-2 border rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-400"
            >
              <option value="">Select type</option>
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
            {errors.coaching && (
              <p className="text-red-600 text-sm">{errors.coaching}</p>
            )}
          </div>

          {/* Country Preferences */}
          <div>
            <label className="block text-lg font-medium mb-2">
              Country Preferences <span className="text-red-600">*</span>
            </label>
            {/*
          >
          </select> */}
            <Select
              options={countries}
              isMulti={true}
              onChange={selectedCountries}
              className={`w-full rounded ${errors.country
                ? "border border-red-500"
                : "border border-gray-300"
                }`}
            />{" "}
            {errors.country && (
              <p className="text-red-600 text-sm">{errors.country}</p>
            )}
          </div>

          {/* Visa Type  */}
          <div>
            <label className="block text-lg font-medium mb-2">
              Visa Type <span className="text-red-600">*</span>
            </label>
            <select
              name="visaType"
              value={formData.visaType}
              onChange={handleChange}
              className="w-full p-2 border rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-400"
            >
              <option value="choose visa type">Choose visa type</option>
              <option value="study visa">Study Visa</option>
              <option value="visitor visa">Visitor Visa</option>
              <option value="visitor visa">Spouse Visa</option>
            </select>
            {errors.visaType && (
              <p className="text-red-600 text-sm">{errors.visaType}</p>
            )}
          </div>

          {/* Exam Selection */}
          <div>
            <label className="block text-lg font-medium mb-2">
              Have you taken any exam? <span className="text-red-600">*</span>
            </label>
            <select
              name="exam"
              value={formData.exam}
              onChange={handleChange}
              className="w-full p-2 border rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-400"
            >
              <option value="">Select type</option>
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
            {errors.exam && <p className="text-red-600 text-sm">{errors.exam}</p>}
          </div>

          {/* Show exam dropdown only if Yes is selected */}
          {formData.exam === "yes" && (
            <div>
              <label className="block text-lg font-medium mb-2">
                Select your exam
              </label>
              <select
                name="examType"
                value={formData.examType || ""}
                onChange={handleChange}
                className="w-full p-2 border rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-400"
              >
                <option value="">Select your exam</option>
                {(examList || []).map((item, index) => (
                  <option key={index} value={item.id}>
                    {item.title}
                  </option>
                ))}
              </select>
            </div>
          )}

          {/* Submit */}
          <div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white text-lg py-2 rounded-lg hover:bg-blue-700 transition"
            >
              Submit
            </button>
          </div>
        </form>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          {/* Background Overlay */}
          <div
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            onClick={closeModal}
          ></div>

          {/* Modal Box */}
          <div className="relative bg-white rounded-2xl shadow-2xl w-2/5 p-10 mx-4 animate-fadeIn">
            <h2 className="text-4xl font-bold text-gray-800 mb-3 text-center">
              🎉 Thank You!
            </h2>
            <p className="text-gray-600 text-center mb-6">
              Your form has been submitted successfully.
              Our team will review your request and contact you shortly.
            </p>
            <p className="text-gray-500 text-center mb-6">
              In the meantime, feel free to explore our resources and learn more about what we offer.
            </p>
            <div className="flex justify-center gap-4">
              <button
                onClick={closeModal}
                className="bg-blue-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-blue-700 transition"
              >
                Close
              </button>
              <a
                href="../dashboard"
                className="bg-gray-200 text-gray-800 px-8 py-3 rounded-lg font-medium hover:bg-gray-300 transition"
              >
                Explore
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
