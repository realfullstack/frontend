import Link, { LinkProps } from 'next/link'

export type QuestionListPropTypes = {
  className?: string
  disabled?: boolean
  onClick?: (event: React.MouseEvent<Element, MouseEvent>) => void
}
const AppLink: React.FC<LinkProps & QuestionListPropTypes> = ({ href, children, ...props }) => {
  const ahref = typeof href == 'string' ? href : undefined
  if (props.disabled) {
    return <button {...props}>{children}</button>
  } else
    return (
      <Link href={href}>
        <a href={ahref} {...props}>
          {children}
        </a>
      </Link>
    )
}

export default AppLink
