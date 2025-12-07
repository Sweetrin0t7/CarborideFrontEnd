import { Input } from "@/components/ui/input";
import { forwardRef } from "react";

interface AuthInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

const AuthInput = forwardRef<HTMLInputElement, AuthInputProps>(
  ({ label, ...props }, ref) => {
    return (
      <div className="w-full">
        <Input
          ref={ref}
          {...props}
          className="w-full bg-input border-border text-foreground placeholder:text-muted-foreground"
        />
      </div>
    );
  }
);

AuthInput.displayName = "AuthInput";

export default AuthInput;
