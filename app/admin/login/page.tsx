"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabase";
import Input from "@/components/ui/Input";
import Button from "@/components/ui/button";
import Container from "@/components/ui/Container";

export default function AdminLoginPage() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] =
    useState("");

  const [loading, setLoading] =
    useState(false);
   
    const handleLogin = async (
        e: React.FormEvent
      ) => {
        e.preventDefault();
    
        setLoading(true);
    
        const { error } =
          await supabase.auth.signInWithPassword({
            email,
            password,
          });
    
        setLoading(false);
    
        if (error) {
          alert(error.message);
          return;
        }
    
        router.push("/admin/dashboard");
      };
      return (
        <Container>
          <div className="max-w-md mx-auto py-20">
            <div className="bg-white rounded-2xl shadow-lg border p-8">
      
              <h1 className="text-3xl font-bold text-center mb-2">
                Admin Login
              </h1>
      
              <p className="text-center text-gray-500 mb-8">
                Swastik Medical Admin Panel
              </p>
      
              <form
                onSubmit={handleLogin}
                className="space-y-5"
              >
                <Input
                  type="email"
                  placeholder="Admin Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
      
                <Input
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
      
                <Button
                  type="submit"
                  className="w-full"
                  disabled={loading}
                >
                  {loading ? "Signing In..." : "Login"}
                </Button>
              </form>
      
            </div>
          </div>
        </Container>
      );
    }