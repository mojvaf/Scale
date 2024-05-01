import { useMutation, useQueryClient } from "@tanstack/react-query";
import { AuthService } from "../services/apiAuth.ts";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";

export function useRegister() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const { mutate: register, isLoading } = useMutation({
    mutationFn: ({ email, password }) =>
      AuthService.registerApi({ email, password }),
    onSuccess: (user) => {
      queryClient.setQueryData(["user"], user.user);
      navigate("/dashboard", { replace: true });
    },
    onError: (err) => {
      console.log("ERROR", err);
      toast.error("Provided email or password are incorrect");
    },
  });

  return { register, isLoading };
}
