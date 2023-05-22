function hyphenateString(str) {
  return str.replace(/[\s.]/g, '-');
}

export default hyphenateString;