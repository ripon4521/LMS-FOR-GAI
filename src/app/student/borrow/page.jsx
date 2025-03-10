"use client"

import { useState } from "react"
import Link from "next/link"
import { BookOpen, ChevronLeft } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { SidebarNav } from "@/components/sidebar-nav"

export default function BorrowBookPage() {
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
      <div className="">
      
        <SidebarNav />
      </div>
      <div className="flex-1">
        <header className="bg-background border-b px-6 py-4 flex items-center">
          <Link href="/student/dashboard" className="mr-4">
            <ChevronLeft className="h-5 w-5" />
          </Link>
          <h1 className="text-xl font-bold">Borrow Books</h1>
        </header>
        <main className="p-6">
          {isSuccess ? (
            <Card>
              <CardHeader>
                <CardTitle className="text-xl text-center text-green-600">Book Borrowed Successfully!</CardTitle>
                <CardDescription className="text-center">
                  Your book has been issued. Please return it by the due date.
                </CardDescription>
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
                      <p className="font-medium">BK-1245</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Issue Date</p>
                      <p className="font-medium">11/03/2025</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Due Date</p>
                      <p className="font-medium">25/03/2025</p>
                    </div>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button variant="outline" asChild>
                  <Link href="/student/dashboard">Back to Dashboard</Link>
                </Button>
                <Button asChild>
                  <Link href="/student/borrow">Borrow Another Book</Link>
                </Button>
              </CardFooter>
            </Card>
          ) : (
            <Card>
              <CardHeader>
                <CardTitle>Borrow Book Form</CardTitle>
                <CardDescription>Fill in the details to borrow a book from the library</CardDescription>
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
                      <Input id="book-id" placeholder="Enter Book ID" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="issue-date">Issue Date</Label>
                      <Input id="issue-date" type="date" defaultValue="2025-03-11" readOnly />
                    </div>
                    <div className="space-y-2 md:col-span-2">
                      <Label htmlFor="due-date">Due Date</Label>
                      <Input id="due-date" type="date" defaultValue="2025-03-25" readOnly />
                    </div>
                  </div>
                  <div className="flex justify-end">
                    <Button type="submit" disabled={isLoading}>
                      {isLoading ? "Processing..." : "Borrow Book"}
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

