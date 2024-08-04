<style>
#wrapper {
  display: flex;
  flex-direction: column;
  min-height: 100%;
}

.not-footer {
    flex: 1;
}

footer {
  background-color: var(--background-off);
  border-top: 1px solid var(--background-off2);
}
</style>

<div id="wrapper">
    <div class="not-footer">
        <slot name="main" />
    </div>
    <footer>
        <slot name="footer" />
    </footer>
</div>