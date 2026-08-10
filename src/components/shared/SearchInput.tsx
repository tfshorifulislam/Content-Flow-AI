import { Button } from "@/components/ui/button"
import { Field } from "@/components/ui/field"
import { Input } from "@/components/ui/input"

export function SearchInput() {
    return (
        <Field orientation="horizontal">
            <Input
                className="w-64 rounded-sm bg-[#EBEFEC]"
                type="search"
                placeholder="Search..." />
            <Button
                className='cursor-pointer bg-[#00695C] hover:bg-[#00695de8] rounded-sm'>
                Search

            </Button>
        </Field>
    )
}
