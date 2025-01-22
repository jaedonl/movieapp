"use client";

import React, { useEffect } from 'react'
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z, ZodType } from 'zod';
import { Button } from "@/components/ui/button"
import { Form, FormControl, FormField, FormItem, FormLabel,FormMessage} from "@/components/ui/form"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue} from "@/components/ui/select"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import Link from 'next/link';
import FileUpload from "@/components/FileUpload";
import { toast } from '@/hooks/use-toast';
import { useRouter } from 'next/navigation';
import { contentSchema } from '@/lib/validations';

interface Props extends Partial<Content> {
    type?: 'create' | 'update'
}

const ContentForm = ({type, ...content}: Props) => {
    const router = useRouter();

    const form = useForm<z.infer<typeof contentSchema>>({
        resolver: zodResolver(contentSchema),
        defaultValues: {
            title: '',
            description: '',
            author: '',
            genre: '',
            videoUrl: '',
            coverUrl: '',
            ageLimit: 'false',
            memberOnly: 'false',
            summary: '',
        }
    })

    const onSubmit = async (values: z.infer<typeof contentSchema>) => {
        console.log(form)
    }
    
    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                <FormField
                    control={form.control}
                    name={"title"}
                    render={({ field }) => (
                        <FormItem className="flex flex-col gap-1">
                            <FormLabel className="text-base font-normal text-dark-500">
                                Content Title
                            </FormLabel>
                            <FormControl>
                                <Input
                                    required
                                    placeholder="Content title"
                                    {...field}
                                    className="book-form_input"
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name={"description"}
                    render={({ field }) => (
                        <FormItem className="flex flex-col gap-1">
                            <FormLabel className="text-base font-normal text-dark-500">
                                Content Description
                            </FormLabel>
                            <FormControl>
                                <Textarea
                                    placeholder="Content description"
                                    {...field}
                                    rows={5}
                                    className="book-form_input"
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name={"genre"}
                    render={({ field }) => (
                        <FormItem className="flex flex-col gap-1">
                            <FormLabel className="text-base font-normal text-dark-500">
                                Genre
                            </FormLabel>
                            <FormControl>
                                <Input
                                    required
                                    placeholder="Content genre"
                                    {...field}
                                    className="book-form_input"
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                <FormField
                    control={form.control}
                    name={"author"}
                    render={({ field }) => (
                        <FormItem className="flex flex-col gap-1">
                            <FormLabel className="text-base font-normal text-dark-500">
                                Author
                            </FormLabel>
                            <FormControl>
                                <Input
                                    required
                                    placeholder="Content author"
                                    {...field}
                                    className="book-form_input"
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                <FormField
                    control={form.control}
                    name={"videoUrl"}
                    render={({ field }) => (
                        <FormItem className="flex flex-col gap-1">
                            <FormLabel className="text-base font-normal text-dark-500">
                                YouTube URL
                            </FormLabel>
                            <FormControl>
                                <Input
                                    required
                                    placeholder="Content URL"
                                    {...field}
                                    className="book-form_input"
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                <FormField
                    control={form.control}
                    name={"coverUrl"}
                    render={({ field }) => (
                        <FormItem className="flex flex-col gap-1">
                        <FormLabel className="text-base font-normal text-dark-500">
                            YouTube Thumbnail
                        </FormLabel>
                        <FormControl>
                            <FileUpload
                                // type="video"
                                // accept="video/*"
                                type="image"
                                accept="image/*"
                                placeholder="Upload a YouTube Thumbnail"
                                folder="videos/covers"
                                variant="light"
                                onFileChange={field.onChange}
                                value={field.value}
                            />
                        </FormControl>
                        <FormMessage />
                        </FormItem>
                    )}
                />

                <FormField
                    control={form.control}
                    name="ageLimit"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel className="text-base font-normal text-dark-500">Age 18+?</FormLabel>
                            <FormControl>
                                <Select onValueChange={field.onChange} defaultValue={field.value}>
                                    
                                    <SelectTrigger>
                                        <SelectValue placeholder="Is this age exclusive content?" />
                                    </SelectTrigger>
                                    
                                    <SelectContent>
                                        <SelectItem value="true">Yes</SelectItem>
                                        <SelectItem value="false">No</SelectItem>
                                    </SelectContent>
                                </Select>                                
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                <FormField
                    control={form.control}
                    name="memberOnly"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel className="text-base font-normal text-dark-500">Member Only?</FormLabel>
                            <FormControl>
                                <Select onValueChange={field.onChange} defaultValue={field.value}>
                                    
                                        <SelectTrigger>
                                            <SelectValue placeholder="Is this member exclusive content?" />
                                        </SelectTrigger>
                                    
                                    <SelectContent>
                                        <SelectItem value="true">Yes</SelectItem>
                                        <SelectItem value="false">No</SelectItem>
                                    </SelectContent>                                    
                                </Select>
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                <FormField
                    control={form.control}
                    name={"summary"}
                    render={({ field }) => (
                        <FormItem className="flex flex-col gap-1">
                            <FormLabel className="text-base font-normal text-dark-500">
                                Content Summary
                            </FormLabel>
                            <FormControl>
                                <Textarea
                                    placeholder="Book summary"
                                    {...field}
                                    rows={5}
                                    className="book-form_input"
                                />
                            </FormControl>

                            <FormMessage />
                        </FormItem>
                    )}
                />
                
                <Button type="submit" className="book-form_btn text-white">Add Content</Button>
            </form>
        </Form>
    )
}

export default ContentForm