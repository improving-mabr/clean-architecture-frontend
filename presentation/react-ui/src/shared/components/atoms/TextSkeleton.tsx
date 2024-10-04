import { Skeleton } from "@mui/material"

interface TextSkeletonProps {
	width: string | number
}

const TextSkeleton = ({ width }: TextSkeletonProps) => <Skeleton variant="text" {...{ width }} />
export default TextSkeleton