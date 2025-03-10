import Link from "next/link"
import { BookOpen, Clock, User } from "lucide-react"
import logo from '../image/image-removebg-preview (3).png'

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background container mx-auto">
      <header className="bg-primary text-primary-foreground py-6">
        <div className="container mx-auto px-4">
          <h1 className="text-2xl md:text-3xl font-bold text-center">Govt. Graphic Arts Institute</h1>
          <h2 className="text-xl md:text-2xl font-semibold text-center mt-2">Library Management System</h2>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:gap-40 mb-8">
          <div className="flex flex-col justify-center">
            <h2 className="text-2xl font-bold mb-4">Welcome to the Library Management System</h2>
            <p className="text-muted-foreground mb-6">
              Access thousands of books, manage your borrowings, and explore our vast collection of educational
              resources.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="w-full sm:w-auto">
                <Link href="/login">Login / Sign Up</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="w-full sm:w-auto">
                <Link href="/forgot-password">Forgot Password</Link>
              </Button>
            </div>
          </div>
          <div className="rounded-lg overflow-hidden ">
            <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6YfEyBDKsVuGo41NpNTO5jolmL1KyfJ6KOg&s' alt="logo" className=" h-64 object-cover" />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-lg font-medium">Total Books</CardTitle>
              <CardDescription>Available in our library</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center">
                <BookOpen className="h-8 w-8 text-primary mr-3" />
                <span className="text-3xl font-bold">2,500+</span>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-lg font-medium">Active Borrowers</CardTitle>
              <CardDescription>Students currently borrowing</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center">
                <User className="h-8 w-8 text-primary mr-3" />
                <span className="text-3xl font-bold">350</span>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-lg font-medium">Books Borrowed</CardTitle>
              <CardDescription>This month</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center">
                <Clock className="h-8 w-8 text-primary mr-3" />
                <span className="text-3xl font-bold">125</span>
              </div>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="top-borrowers" className="mb-12">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="top-borrowers">Top 5 Bookworm Borrowers</TabsTrigger>
            <TabsTrigger value="most-borrowed">Most Borrowed Books</TabsTrigger>
          </TabsList>
          <TabsContent value="top-borrowers">
            <Card>
              <CardHeader>
                <CardTitle>Top 5 Bookworm Borrowers</CardTitle>
                <CardDescription>Students who borrowed the most books this semester</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    { name: "Rahul Ahmed", id: "GA-2023-001", count: 15 },
                    { name: "Priya Singh", id: "GA-2023-042", count: 12 },
                    { name: "Mohammed Ali", id: "GA-2022-105", count: 10 },
                    { name: "Anjali Sharma", id: "GA-2023-078", count: 9 },
                    { name: "Rajesh Kumar", id: "GA-2022-056", count: 8 },
                  ].map((student, index) => (
                    <div key={index} className="flex items-center justify-between border-b pb-2">
                      <div className="flex items-center">
                        <div className="bg-primary/10 text-primary font-bold rounded-full w-8 h-8 flex items-center justify-center mr-3">
                          {index + 1}
                        </div>
                        <div>
                          <p className="font-medium">{student.name}</p>
                          <p className="text-sm text-muted-foreground">{student.id}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="font-bold">{student.count}</p>
                        <p className="text-sm text-muted-foreground">Books</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="most-borrowed">
            <Card>
              <CardHeader>
                <CardTitle>Most Borrowed Books</CardTitle>
                <CardDescription>Popular books among students this semester</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    { title: "Graphic Design Principles", author: "Sarah Johnson", id: "BK-1245", count: 32 },
                    { title: "Typography Fundamentals", author: "Michael Chen", id: "BK-0987", count: 28 },
                    { title: "Color Theory in Practice", author: "Amina Patel", id: "BK-3456", count: 25 },
                    { title: "Digital Illustration Techniques", author: "David Wong", id: "BK-7890", count: 22 },
                    { title: "Print Production Essentials", author: "Lisa Garcia", id: "BK-5432", count: 19 },
                  ].map((book, index) => (
                    <div key={index} className="flex items-center justify-between border-b pb-2">
                      <div className="flex items-center">
                        <div className="bg-primary/10 text-primary font-bold rounded-full w-8 h-8 flex items-center justify-center mr-3">
                          {index + 1}
                        </div>
                        <div>
                          <p className="font-medium">{book.title}</p>
                          <p className="text-sm text-muted-foreground">by {book.author}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="font-bold">{book.count}</p>
                        <p className="text-sm text-muted-foreground">Borrows</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </main>

      <footer className="bg-muted py-6">
        <div className="container mx-auto px-4 text-center">
          <p className="text-muted-foreground">
            © {new Date().getFullYear()} Govt. Graphic Arts Institute Library Management System
          </p>
        </div>
      </footer>
    </div>
  )
}

