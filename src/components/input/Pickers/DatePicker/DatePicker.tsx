import { DatePicker as MaterialDatePicker } from '@material-ui/pickers'
import React from 'react'
import BaseDatePickerProps from '../BaseDatePickerProps/BaseDatePickerProps'

export interface DatePickerProps extends BaseDatePickerProps {}

export const DatePicker: React.FC<DatePickerProps> = (
  props: DatePickerProps
) => {
  return <MaterialDatePicker {...props} />
}

export default DatePicker
