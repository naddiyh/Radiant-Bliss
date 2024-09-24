import { useForm } from "react-hook-form";
import { collection, addDoc } from "firebase/firestore";
import { db } from "@/config/firebase";
import { IoCloseOutline } from "react-icons/io5";
interface BookingProps {
  onSubmitReserv: () => void;
  onClose: () => void;
}

interface BookingFormInputs {
  name: string;
  phoneNumber: string;
  serviceType: string;
  dateTime: string;
}

export const Booking: React.FC<BookingProps> = ({
  onSubmitReserv,
  onClose,
}) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<BookingFormInputs>();

  const onSubmit = async (data: BookingFormInputs) => {
    try {
      const reservationRef = collection(db, "reservations");
      await addDoc(reservationRef, data);
      console.log("Reservation submitted:", data);
      onSubmitReserv();
      reset();
    } catch (error) {
      console.error("Error submitting reservation:", error);
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex w-[400px] flex-col gap-2 rounded-md bg-white px-5 py-4 shadow-md"
    >
      <div className="relative flex justify-center">
        <h1 className="text-center text-[18pt] font-bold text-[#d2ac47]">
          Reservation Form
        </h1>
        <button type="button" className="absolute right-0" onClick={onClose}>
          <IoCloseOutline className="h-6 w-6 text-black" />
        </button>
      </div>
      <div className="">
        <label htmlFor="name" className="block text-gray-700">
          Name
        </label>
        <input
          id="name"
          {...register("name", { required: true, maxLength: 50 })}
          placeholder="Name"
          className="w-full rounded-md border border-gray-300 p-2 text-black"
        />
      </div>
      <div className="">
        <label htmlFor="phoneNumber" className="block text-gray-700">
          Active Phone Number
        </label>
        <input
          id="phoneNumber"
          {...register("phoneNumber", {
            required: "Phone Number is required",
            pattern: {
              value: /^[0-9\b]+$/,
              message: "Please input a valid phone number",
            },
            maxLength: {
              value: 15,
              message: "Phone Number should not exceed 15 characters",
            },
          })}
          placeholder="Phone Number"
          className="w-full rounded-md border border-gray-300 p-2 text-black"
        />
        {errors.phoneNumber && (
          <span className="text-sm text-red-500">
            {errors.phoneNumber.message}
          </span>
        )}
      </div>
      <div className="">
        <label htmlFor="serviceType" className="block text-gray-700">
          Type of service
        </label>
        <select
          id="serviceType"
          {...register("serviceType", { required: true })}
          className="w-full rounded-md border border-gray-300 p-2 text-black"
        >
          <option value="">Select Service Type</option>
          <option value="Haircuts and styling">Haircuts and styling</option>
          <option value="Manicure and pedicure">Manicure and pedicure</option>
          <option value="Facial treatments">Facial treatments</option>
        </select>
      </div>
      <div className="">
        <label htmlFor="dateTime" className="block text-gray-700">
          Date and Time
        </label>
        <input
          id="dateTime"
          {...register("dateTime", { required: true })}
          type="datetime-local"
          className="w-full rounded-md border border-gray-300 p-2 text-black"
        />
      </div>
      <div className="flex justify-end">
        <input
          type="submit"
          value="Submit"
          className="cursor-pointer rounded-md bg-[#d2ac47] px-4 py-2 text-white hover:bg-blue-600"
        />
      </div>
    </form>
  );
};
