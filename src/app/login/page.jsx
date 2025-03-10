"use client"

import { useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { BookOpen } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function LoginPage() {
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(false)

  const handleLogin = (e) => {
    e.preventDefault()
    setIsLoading(true)

    // Simulate login process
    setTimeout(() => {
      setIsLoading(false)
      // Redirect based on role (student or admin)
      const formData = new FormData(e.target)
      const role = formData.get("role")

      if (role === "admin") {
        router.push("/admin/dashboard")
      } else {
        router.push("/student/dashboard")
      }
    }, 1500)
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-muted/30 px-4">
      <Card className="w-full max-w-md">
        <CardHeader className="space-y-2 text-center">
          <div className="flex justify-center mb-2">
            <div className="bg-primary p-2 rounded-full">
              <BookOpen className="h-6 w-6 text-primary-foreground" />
            </div>
          </div>
          <CardTitle className="text-2xl">Sign in to LMS</CardTitle>
          <CardDescription>Govt. Graphic Arts Institute Library Management System</CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="student" className="w-full">
            <TabsList className="grid w-full grid-cols-2 mb-4">
              <TabsTrigger value="student">Student</TabsTrigger>
              <TabsTrigger value="admin">Admin</TabsTrigger>
            </TabsList>
            <TabsContent value="student">
              <form onSubmit={handleLogin}>
                <input type="hidden" name="role" value="student" />
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="student-id">Student ID / Board Roll</Label>
                    <Input id="student-id" placeholder="Enter your ID" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="student-password">Password</Label>
                    <Input id="student-password" type="password" placeholder="••••••••" required />
                  </div>
                  <Button type="submit" className="w-full" disabled={isLoading}>
                    {isLoading ? "Signing in..." : "Sign In"}
                  </Button>
                </div>
              </form>
            </TabsContent>
            <TabsContent value="admin">
              <form onSubmit={handleLogin}>
                <input type="hidden" name="role" value="admin" />
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="admin-id">Admin ID</Label>
                    <Input id="admin-id" placeholder="Enter your ID" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="admin-password">Password</Label>
                    <Input id="admin-password" type="password" placeholder="••••••••" required />
                  </div>
                  <Button type="submit" className="w-full" disabled={isLoading}>
                    {isLoading ? "Signing in..." : "Sign In"}
                  </Button>
                </div>
              </form>
            </TabsContent>
          </Tabs>
        </CardContent>
        <CardFooter className="flex flex-col space-y-4">
          <div className="text-center w-full">
            <Link href="/forgot-password" className="text-sm text-primary hover:underline">
              Forgot your password?
            </Link>
          </div>
          <div className="text-center text-sm text-muted-foreground w-full">
            <Link href="/" className="hover:underline">
              Back to Home
            </Link>
          </div>
        </CardFooter>
      </Card>
    </div>
  )
}

