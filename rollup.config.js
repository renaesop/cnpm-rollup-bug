/**
 * Created by fed on 2016/10/9.
 */
import babel from 'rollup-plugin-babel';

export default {
  entry: 'src/hello.js',
  plugins: [babel()],
  dest: 'dist/bundle.js',
}