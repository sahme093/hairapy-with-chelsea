import { useMemo } from 'react';
import salon from './salon.config.js';

// Parse a yyyy-mm-dd input value at local noon so the weekday never shifts with timezone.
const parseDate = (value) => (value ? new Date(value + 'T12:00') : null);

// salon.hours is Monday-first; Date#getDay() is Sunday-first.
const hoursFor = (date) => salon.hours[(date.getDay() + 6) % 7];

export function useBookingRequest(form) {
  return useMemo(() => {
    const date = parseDate(form.date);
    const isClosedDay = date ? Boolean(hoursFor(date)?.closed) : false;
    const fmtDate = date
      ? date.toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric' })
      : '';

    const lines = [
      `Hi! I'd like to request an appointment at ${salon.name}.`,
      'Name: ' + (form.name || '—'),
      'Service: ' + form.service,
      'Preferred: ' + (fmtDate ? fmtDate + ', ' : '') + form.time.toLowerCase(),
    ];
    if (form.notes) lines.push('Notes: ' + form.notes);
    const body = lines.join('\n');

    return {
      body,
      isClosedDay,
      smsHref: 'sms:' + salon.phone.e164 + '?&body=' + encodeURIComponent(body),
    };
  }, [form]);
}
