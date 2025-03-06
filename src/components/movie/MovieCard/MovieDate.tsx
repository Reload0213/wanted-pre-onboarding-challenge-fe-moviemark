import { format } from "date-fns";
import { ko } from "date-fns/locale";

interface MovieDateProps {
  date: string;
}

const MovieDate = ({ date }: MovieDateProps) => {
	const formatted = format(new Date(date), "yyyy년 MM월 dd일", { locale: ko });

	return (
		<div className="text-caption text-gray-400 text-right">개봉일: {formatted}</div>
	);
};

export default MovieDate;