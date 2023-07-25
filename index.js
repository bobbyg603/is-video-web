import videoExtensions from 'video-extensions' assert { type: "json" };
const exts = Object.create(null);

videoExtensions.forEach(el => exts[el] = true);

const isVideo = filePath => filePath.split('.').pop().toLowerCase() in exts;

export default isVideo;
