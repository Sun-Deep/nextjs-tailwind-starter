import { cva } from 'class-variance-authority'
import PropTypes from 'prop-types'

const buttonStyles = cva(
  'flex items-center justify-center px-4 py-1.5 text-bodyLargeRegular rounded',
  {
    variants: {
      variant: {
        primary:
          'bg-primary-main text-neutral-v1 focus:bg-primary-v1 hover:bg-primaryDark-v3 active:bg-primaryDark-v2 disabled:bg-neutral-v3',
        outline:
          'border border-primary-main text-primary-main bg-neutral-v1 focus:border-2 focus:border-primaryDark-v3 hover:border-primaryDark-v2 active:border active:border-primaryDark-v3 disabled:bg-neutral-v4 disabled:text-neutral-v5 disabled:border-neutral-v5',
      },
    },
    defaultVariants: {
      variant: 'primary',
    },
  }
)

function Button({ variant, type, onClick, children, ...props }) {
  return (
    <button
      type={type}
      className={buttonStyles({ variant })}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  )
}

Button.defaultProps = {
  type: 'button',
  variant: 'primary',
  onClick: () => {},
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
  type: PropTypes.oneOf(['submit', 'button']),
  variant: PropTypes.oneOf(['primary', 'outline']),
  onClick: PropTypes.func,
}

export default Button
