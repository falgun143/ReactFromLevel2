import { useForm } from "react-hook-form";
import { z, ZodType } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

export type Data = {
  fullname: string;
  email: string;
  phonenumber: number;
  position: string;
  experience?: number;
  portfoliolink?: string;
  managementexperience?: number;
  additionalskills?: string[];
  preferredinterviewdate: string;
  preferredinterviewtime: string;
};

const JobFormValidation = () => {
  const registrationSchema: ZodType<Data> = z.object({
    fullname: z.string().min(2, { message: "Full name must be at least 7 characters" }),
    email: z.string().email({ message: "Invalid email address" }),
    phonenumber: z.number()
    .refine((value) => /^[\d]{10}$/.test(value.toString()), {
      message: "Phone number must be numeric and exactly 10 digits",
    }),
    position: z.string({ message: "Position is required" }),
    experience: z.number().optional(),
    portfoliolink: z.string().url({ message: "Invalid URL" }).optional(),
    managementexperience: z.number().optional(),
    additionalskills: z.array(z.string()).optional(),
    preferredinterviewdate: z.string({ message: "Preferred interview date is required" }),
    preferredinterviewtime: z.string({ message: "Preferred interview time is required" })
  });

  const { register, handleSubmit, control, formState: { errors }, watch, reset } = useForm<Data>({
    resolver: zodResolver(registrationSchema),
  });

  return { register, handleSubmit, control, errors, watch, reset };
};

export default JobFormValidation;
