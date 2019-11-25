import shell from 'shelljs';

shell.cp('-R', 'src/public', 'dist');
shell.cp('-R', 'src/app/views', 'dist/app');
