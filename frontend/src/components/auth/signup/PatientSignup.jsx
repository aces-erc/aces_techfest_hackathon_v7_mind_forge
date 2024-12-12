"use client"

import { useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { Button } from "@/components/ui/button"
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import axios from "axios"
import { backendApi } from "@/lib/constant"
import { useRouter } from "next/navigation"
import { RotatingLines } from "react-loader-spinner"
import { useToast } from "@/hooks/use-toast"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { CalendarIcon } from "lucide-react"
import { Calendar } from "@/components/ui/calendar"
import { cn } from "@/lib/utils"
import { format } from "date-fns"


const formSchema = z.object({
    fullName: z.string().min(1),
    email: z.string().email({
        message: "Please enter a valid email address.",
    }),
    password: z.string().min(8, {
        message: "Password must be at least 8 characters long.",
    }),
    role: z.string().min(1, {
        message: "Role is required name must be at least 1 characters long.",
    }),
    phoneNumber: z.string().min(10),
})

export default function PatientSignupForm() {
    const [isLoading, setIsLoading] = useState(false)
    const router = useRouter();
    const { toast } = useToast()
    const [date, setDate] = useState(null)

    const form = useForm({
        resolver: zodResolver(formSchema),
        defaultValues: {
            fullName: "",
            email: "",
            password: "",
            role: "Patient",
            phoneNumber: "",
        },
    })

    async function onSubmit(values) {
        setIsLoading(true)

        try {
            const newValue = { ...values, dob: date }
            const res = await axios.post(`${backendApi}/user/register`, newValue)
           
            console.log(res)
            // router.push("/login");
        } catch (error) {
            console.log(error.response.data)
            const duplicateKeys = Object.keys(error.response.data.errors)
            const errMsg = `${error.response.data.message}: ${duplicateKeys.join(", ")}`
            toast({
                title: "Error",
                description: errMsg,
                variant: "destructive",
            })
        }
        finally {
            setIsLoading(false)
        }
    }

    return (
        <Card className="shadow-lg bg-[#FAFAFA]">
            <CardHeader>
                <CardTitle>Patient Signup</CardTitle>
                <CardDescription>Enter your details to signup</CardDescription>
            </CardHeader>
            <CardContent>
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col gap-3">
                        <div className="flex  gap-3 w-full items-center">
                            <FormField
                                control={form.control}
                                name="email"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Email</FormLabel>
                                        <FormControl>
                                            <Input placeholder="Enter your email" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="password"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Password</FormLabel>
                                        <FormControl>
                                            <Input type="password" placeholder="Enter your password" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                        </div>
                        <div className="flex gap-3 items-center">
                            <FormField
                                control={form.control}
                                name="fullName"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Full Name</FormLabel>
                                        <FormControl>
                                            <Input type="text" placeholder="Enter your full name" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />

                            <FormField
                                control={form.control}
                                name="phoneNumber"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Phone Number</FormLabel>
                                        <FormControl>
                                            <Input type="number" placeholder="Enter your phone number" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                        </div>

                        <div className="flex items-center ">
                            <Popover>
                                <div className="flex flex-col gap-3">
                                <FormLabel>Date of birth</FormLabel>
                                <PopoverTrigger asChild>
                                    <Button
                                        variant={"outline"}
                                        className={cn(
                                            "w-[220px] justify-start text-left font-normal",
                                            !date && "text-muted-foreground"
                                        )}
                                    >
                                        <CalendarIcon />
                                        {date ? format(date, "PPP") : <span>Pick a date</span>}
                                    </Button>
                                </PopoverTrigger>
                                </div>
                                <PopoverContent className="w-auto p-0">
                                    <Calendar
                                        mode="single"
                                        selected={date}
                                        onSelect={setDate}
                                        initialFocus
                                    />
                                </PopoverContent>
                            </Popover>
                        </div>
                        <Button type="submit" className="w-full " disabled={isLoading}>
                            {isLoading ?

                                <RotatingLines
                                    visible={true}
                                    height="96"
                                    width="96"
                                    color="grey"
                                    strokeWidth="5"
                                    animationDuration="0.75"
                                    ariaLabel="rotating-lines-loading"
                                    wrapperStyle={{}}
                                    wrapperClass=""
                                />
                                : "Signup"}
                        </Button>
                    </form>
                </Form>
            </CardContent>
        </Card>
    )
}

