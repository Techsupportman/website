<script lang="ts">
	import ProfileForm from "./profile-form.svelte";
	import type { PageData } from "./$types.js";
	import { Separator } from "$lib/components/ui/separator/index.js";

	export let data: PageData;
</script>

<div class="space-y-6">
	<div>
		<h3 class="text-lg font-medium">Profile</h3>
		<p class="text-sm text-muted-foreground">
			Change profile setings.
		</p>
	</div>
	<Separator />
	<ProfileForm data={data.form} />
</div>
