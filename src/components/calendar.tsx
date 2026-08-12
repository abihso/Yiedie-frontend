import dayjs from 'dayjs'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import IconButton from '@mui/material/IconButton'
import Stack from '@mui/material/Stack'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar'
import type { PickerDayProps } from '@mui/x-date-pickers/PickerDay'
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth'
import NorthEastIcon from '@mui/icons-material/NorthEast'

const EVENT_COLORS: Record<number, { bg: string, text: string }> = {
  2: { bg: '#97D2FA', text: '#000' }, // light blue
  4: { bg: '#96F2C1', text: '#000' }, // light green
  7: { bg: '#02DA45', text: '#000' }, // dark green
  8: { bg: '#97D2FA', text: '#000' },
  13: { bg: '#000000', text: '#FFF' }, // black
  15: { bg: '#96F2C1', text: '#000' },
  16: { bg: '#96F2C1', text: '#000' },
  18: { bg: '#97D2FA', text: '#000' },
  28: { bg: '#02DA45', text: '#000' },
  30: { bg: '#97D2FA', text: '#000' },
}

function CustomDay(props: PickerDayProps) {
  const { day, outsideCurrentMonth } = props
  
  if (outsideCurrentMonth) {
    return <Box sx={{ width: 40, height: 40, m: 0.5 }} />
  }

  const dateNum = day.date()
  const config = EVENT_COLORS[dateNum]
  
  return (
    <Box
      sx={{
        width: 40,
        height: 40,
        m: 0.5,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: '50%',
        backgroundColor: config ? config.bg : 'transparent',
        color: config ? config.text : '#000',
        fontWeight: 600,
        fontSize: '0.875rem',
        fontFamily: 'inherit',
      }}
    >
      {day.format('DD')}
    </Box>
  )
}

function CustomHeader() {
  return (
    <Stack 
      direction="row" 
      sx={{ px: 3, pt: 3, pb: 2, alignItems: 'center', justifyContent: 'space-between' }}
    >
      <Typography variant="h5" sx={{ fontWeight: 700, fontFamily: 'inherit' }}>
        Schedule
      </Typography>
      
      <Stack direction="row" spacing={1.5} sx={{ alignItems: 'center' }}>
        <Box 
          sx={{ 
            display: 'flex', 
            alignItems: 'center', 
            backgroundColor: '#E6E7ED', 
            borderRadius: 8, 
            px: 1.5, 
            py: 0.75,
            gap: 1,
          }}
        >
          <CalendarMonthIcon sx={{ color: '#5F6368', fontSize: 20 }} />
          <Typography sx={{ fontWeight: 600, fontSize: '0.875rem', color: '#5F6368' }}>
            August 2026
          </Typography>
        </Box>
        
        <IconButton 
          sx={{ 
            backgroundColor: '#FA900A', 
            color: '#000',
            width: 40,
            height: 40,
            '&:hover': { backgroundColor: '#E08008' },
          }}
        >
          <NorthEastIcon sx={{ fontSize: 20, strokeWidth: 1 }} />
        </IconButton>
      </Stack>
    </Stack>
  )
}

export default function Calendar() {
  return (
    <Box 
      sx={{ 
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff',
        fontFamily: 'Inter, sans-serif',
      }}
    >
      <Box 
        sx={{ 
          width: 380,
          backgroundColor: '#F5F5FA',
          borderRadius: 4,
          overflow: 'hidden',
          boxShadow: '0 10px 30px rgba(0,0,0,0.05)',
          borderBottom: '4px solid #FA900A',
        }}
      >
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DateCalendar
            defaultValue={dayjs('2021-08-01')}
            /* showDaysOutsideCurrentMonth defaults to false in v6 */
            dayOfWeekFormatter={(date) => date.format('ddd')}
            slots={{
              day: CustomDay,
              calendarHeader: CustomHeader,
            }}
            sx={{
              width: '100%',
              margin: 0,
              padding: 0,
              '& .MuiDayCalendar-header': {
                justifyContent: 'space-between',
                px: 2.5,
                pt: 1,
              },
              '& .MuiDayCalendar-weekDayLabel': {
                color: '#000',
                fontWeight: 700,
                fontSize: '0.875rem',
                fontFamily: 'inherit',
                width: 40,
                height: 40,
              },
              '& .MuiDayCalendar-monthContainer': {
                px: 2,
                pb: 2,
              },
              '& .MuiPickersSlideTransition-root': {
                minHeight: 280,
              },
              '& .MuiDayCalendar-weekContainer': {
                justifyContent: 'space-between',
                margin: '2px 0',
              },
            }}
          />
        </LocalizationProvider>
      </Box>
    </Box>
  )
}
