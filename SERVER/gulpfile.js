gulp.task('travis', ['build', 'testServerjs'], function() {
	process.exit(0);
});
