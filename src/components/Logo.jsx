import TwoPeaks from '../assets/logo.svg'

export const Logo = ({ h = '90px', w = '102px' }) => {
  return (
    <img src={TwoPeaks} alt='TwoPeaks Logo' style={{ width: w, height: h }} />
  )
}
