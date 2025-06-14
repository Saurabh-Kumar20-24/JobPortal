import Navbar from "../ui/shared/Navbar";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { RadioGroup } from "@/components/ui/radio-group";
import { Link, useNavigate} from "react-router-dom";
import { useEffect, useState } from "react";
import { USER_API_END_POINT } from "../../utils/constant";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import axios from "axios";
import { setLoading } from "@/redux/authSlice";
import { Loader2 } from "lucide-react";

const Signup = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
   const {loading,user} = useSelector(state=> state.auth)
  const [input, setInput] = useState({
    fullname: "",
    email: "",
    password: "",
    phoneNumber: "",
    role: "",
    file: "",
  });

  const handleChange = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };
  const handleFileChange = (e) => {
    setInput({ ...input, file: e.target.files?.[0] });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("fullname", input.fullname);
    formData.append("email", input.email);
    formData.append("phoneNumber", input.phoneNumber);
    formData.append("password", input.password);
    formData.append("role", input.role);
    if (input.file) {
      formData.append("file", input.file);
    }
    try {
      dispatch(setLoading(true))
      const res = await axios.post(`${USER_API_END_POINT}/register`, formData, {
        headers: { "Content-Type": "multipart/form-data" },
        withCredentials: true,
      });
     
      if (res.data.success) {
        navigate("/login");
        toast.success(res.data.message);
      }
    } catch (error) {
      console.log(error);
       toast.error(error.response.data.message);
    }finally{
      dispatch(setLoading(false))
    }
  };

  useEffect(()=>{
       if(user){
        navigate('/')
       }
    },[])

  return (
    <div>
      <Navbar />
      <div className="flex items-center justify-center max-w-7xl mx-auto">
        <form
          onSubmit={handleSubmit}
          className="w-1/2 border border-gray-200 rounded-md p-4 my-10"
        >
          <h1 className="font-bold text-xl mb-5">Sign Up</h1>
          <div className="my-2">
            <Label>Full Name</Label>
            <Input
              value={input.fullname}
              name="fullname"
              onChange={handleChange}
              type="text"
              placeholder="raja"
            />
          </div>
          <div className="my-2">
            <Label>Email</Label>
            <Input
              value={input.email}
              name="email"
              onChange={handleChange}
              type="email"
              placeholder="raja@gmail.com"
            />
          </div>
          <div className="my-2">
            <Label>Phone Number</Label>
            <Input
              value={input.phoneNumber}
              name="phoneNumber"
              onChange={handleChange}
              type="text"
              placeholder="number"
            />
          </div>
          <div className="my-2">
            <Label>Password</Label>
            <Input
              value={input.password}
              name="password"
              onChange={handleChange}
              type="password"
              placeholder="password"
            />
          </div>
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <RadioGroup className="flex items-center gap-4 my-5">
              <div className="flex items-center gap-3">
                <Input
                  checked={input.role === "student"}
                  onChange={handleChange}
                  type="radio"
                  name="role"
                  value="student"
                  className="cursor-pointer"
                />
                <Label htmlFor="role">Student</Label>
              </div>
              <div className="flex items-center gap-3">
                <Input
                  checked={input.role === "recruiter"}
                  onChange={handleChange}
                  type="radio"
                  name="role"
                  value="recruiter"
                  className="cursor-pointer"
                />
                <Label htmlFor="role">Recruiter</Label>
              </div>
            </RadioGroup>
            <div className="flex items-center gap-1">
              <Label>Profile</Label>
              <Input
                onChange={handleFileChange}
                accept="image/*"
                type="file"
                className="cursor-pointer"
              />
            </div>
          </div>
           {
            loading ? <Button className="w-full my-4"><Loader2 className="mr-2 h-4 w-4 animate-spin"/> Please wait...</Button> :
          <Button type="submit" className="w-full my-4">
            Signup
          </Button>
          }
          <span className="text-sm">
            Already have an account?{" "}
            <Link to="/login" className="text-blue-600">
              Login
            </Link>
          </span>
        </form>
      </div>
    </div>
  );
};

export default Signup;
