import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-hot-toast";
import { createData } from "../services/apiData";

export function useCreateData() {
  const queryClient = useQueryClient();

  const { mutate: create, isLoading: isCreating } = useMutation({
    mutationFn: createData,
    onSuccess: () => {
      toast.success("New data successfully created");
      queryClient.invalidateQueries({ queryKey: ["cabins"] });
    },
    onError: (err) => toast.error(err.message),
  });

  return { isCreating, create };
}
