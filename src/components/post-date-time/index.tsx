import { formatDateTime } from "@/utils/dateTimeFormater";
import { formatDistanceToNow } from "date-fns";

type PostDateTimeProps = {
    dateTime: string
}

export function PostDateTime({ dateTime }: PostDateTimeProps) {
    return (
        <time
            className='text-slate-600 text-sm/tight'
            dateTime={dateTime}
            title={formatDistanceToNow(dateTime)}>
            {formatDateTime(dateTime)}
        </time>
    );
}