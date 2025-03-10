"use client"

import { useState } from "react"
import Link from "next/link"
import { BookOpen, ChevronLeft, CheckCircle } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { SidebarNav } from "@/components/sidebar-nav"

export default function ReturnBookPage() {
  const [isLoading, setIsLoading] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setIsLoading(true)

    // Simulate API request
    setTimeout(() => {
      setIsLoading(false)
      setIsSuccess(true)
    }, 1500)
  }

  return (
    <div className="flex min-h-screen bg-muted/30">
      <div className="hidden md:flex flex-col w-64 bg-background border-r p-6">
        <div className="flex items-center mb-8">
          <BookOpen className="h-6 w-6 text-primary mr-2" />
          <h2 className="text-xl font-bold">LMS</h2>
        </div>
        <SidebarNav />
      </div>
      <div className="flex-1">
        <header className="bg-background border-b px-6 py-4 flex items-center">
          <Link href="/student/dashboard" className="mr-4">
            <ChevronLeft className="h-5 w-5" />
          </Link>
          <h1 className="text-xl font-bold">Return Books</h1>
        </header>
        <main className="p-6">
          {isSuccess ? (
            <Card>
              <CardHeader>
                <div className="flex justify-center mb-2">
                  <CheckCircle className="h-12 w-12 text-green-500" />
                </div>
                <CardTitle className="text-xl text-center text-green-600">Book Returned Successfully!</CardTitle>
                <CardDescription className="text-center">Thank you for returning the book on time.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="rounded-md border p-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <p className="text-sm text-muted-foreground">Student ID</p>
                      <p className="font-medium">GA-2023-001</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Book ID</p>
                      <p className="font-medium">BK-0987</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Issue Date</p>
                      <p className="font-medium">20/02/2025</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Return Date</p>
                      <p className="font-medium">11/03/2025</p>
                    </div>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button variant="outline" asChild>
                  <Link href="/student/dashboard">Back to Dashboard</Link>
                </Button>
                <Button asChild>
                  <Link href="/student/return">Return Another Book</Link>
                </Button>
              </CardFooter>
            </Card>
          ) : (
            <Card>
              <CardHeader>
                <CardTitle>Return Book Form</CardTitle>
                <CardDescription>Fill in the details to return a book to the library</CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="student-id">Student ID / Board Roll</Label>
                      <Input id="student-id" defaultValue="GA-2023-001" readOnly />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="semester">Semester</Label>
                      <Select defaultValue="4">
                        <SelectTrigger>
                          <SelectValue placeholder="Select semester" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="1">1st Semester</SelectItem>
                          <SelectItem value="2">2nd Semester</SelectItem>
                          <SelectItem value="3">3rd Semester</SelectItem>
                          <SelectItem value="4">4th Semester</SelectItem>
                          <SelectItem value="5">5th Semester</SelectItem>
                          <SelectItem value="6">6th Semester</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="department">Department</Label>
                      <Select defaultValue="graphic">
                        <SelectTrigger>
                          <SelectValue placeholder="Select department" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="graphic">Graphic Design</SelectItem>
                          <SelectItem value="printing">Printing Technology</SelectItem>
                          <SelectItem value="multimedia">Multimedia</SelectItem>
                          <SelectItem value="photography">Photography</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="shift">Shift</Label>
                      <Select defaultValue="morning">
                        <SelectTrigger>
                          <SelectValue placeholder="Select shift" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="morning">Morning</SelectItem>
                          <SelectItem value="day">Day</SelectItem>
                          <SelectItem value="evening">Evening</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="book-id">Book ID</Label>
                      <Select defaultValue="BK-0987">
                        <SelectTrigger>
                          <SelectValue placeholder="Select book" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="BK-1245">BK-1245 - Graphic Design Principles</SelectItem>
                          <SelectItem value="BK-3456">BK-3456 - Color Theory in Practice</SelectItem>
                          <SelectItem value="BK-7890">BK-7890 - Digital Illustration Techniques</SelectItem>
                          <SelectItem value="BK-5432">BK-5432 - Print Production Essentials</SelectItem>
                          <SelectItem value="BK-0987">BK-0987 - Typography Fundamentals</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="issue-date">Issue Date</Label>
                      <Input id="issue-date" defaultValue="20/02/2025" readOnly />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="due-date">Due Date</Label>
                      <Input id="due-date" defaultValue="06/03/2025" readOnly />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="return-date">Return Date</Label>
                      <Input id="return-date" defaultValue="11/03/2025" readOnly />
                    </div>
                  </div>
                  <div className="flex justify-end">
                    <Button type="submit" disabled={isLoading}>
                      {isLoading ? "Processing..." : "Return Book"}
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          )}
        </main>
      </div>
    </div>
  )
}

