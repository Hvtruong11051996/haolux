



const ConvertVnd = (x) => {
  x = x.toLocaleString('vi', { style: 'currency', currency: 'VND' });
  return x
}
export default ConvertVnd