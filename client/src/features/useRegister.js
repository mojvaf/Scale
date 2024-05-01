import { useMutation } from "@tanstack/react-query";
import { AuthService } from "../services/apiAuth.ts";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";

export function useRegister() {
  const navigate = useNavigate();

  const { mutate: register, isLoading } = useMutation({
    mutationFn: ({ name, email, password }) =>
      AuthService.registerApi({ fullName: name, email, password }),
    onSuccess: (user) => {
      navigate("/dashboard", { replace: true });
    },
    onError: (err) => {
      console.log("ERROR", err);
      toast.error("Provided email or password are incorrect");
    },
  });

  return { register, isLoading };
}
