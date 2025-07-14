import { InputForm } from '@/components/Form/InputForm'
import { TextAreaForm } from '@/components/Form/TextAreaForm'
import { Select, SelectItem } from '@heroui/react'
import { Control, Controller } from 'react-hook-form'

type Props = {
  control: Control<any>
}

export function OrganizeTestSection({ control }: Props) {
  return (
    <div className="flex flex-col gap-4 mb-8">
      <header className="flex justify-between items-center gap-2">
        <h3 className="text-xs text-gray-900 font-semibold">
          ORGANIZE YOUR TESTS
        </h3>
      </header>

      <div className="overflow-hidden border border-gray-50 rounded-lg">
        <div className="p-0 border border-b-1 hover:border-gray-900 rounded-t-lg transition ">
          <Controller
            name="name"
            control={control}
            render={({ field }) => (
              <InputForm
                placeholder="Enter the name of the test"
                label="Name"
                radius="none"
                errorMessage="Name is required"
                isRequired
                className="outline-1 rounded-none"
                {...field}
              />
            )}
          />
        </div>

        <div className="p-0 border border-t-gray-50 hover:border-gray-900 transition">
          <Controller
            name="description"
            control={control}
            render={({ field }) => (
              <TextAreaForm
                placeholder="Add information about the test"
                isRequired
                label="Description"
                errorMessage="Description is required"
                radius="none"
                {...field}
              />
            )}
          />
        </div>

        <div className="p-0 border border-t-gray-50 hover:border-gray-900 transition rounded-b-lg">
          <Controller
            name="group"
            control={control}
            render={({ field }) => (
              <Select label="Add your test to a group" {...field}>
                <SelectItem key="group1">Group 1</SelectItem>
              </Select>
            )}
          />
        </div>
      </div>
    </div>
  )
}
