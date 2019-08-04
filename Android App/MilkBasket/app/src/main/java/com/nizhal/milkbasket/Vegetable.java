package com.nizhal.milkbasket;

import android.graphics.Color;
import android.graphics.Typeface;
import android.support.v4.content.res.ResourcesCompat;
import android.support.v7.app.ActionBar;
import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.view.View;
import android.widget.RelativeLayout;
import android.widget.TextView;

public class Vegetable extends AppCompatActivity {
    RelativeLayout tomato;
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        ActionBar actionBar = getSupportActionBar();
        TextView tv = new TextView(getApplicationContext());
        Typeface typeface = ResourcesCompat.getFont(this, R.font.merlo_regular);
        RelativeLayout.LayoutParams lp = new RelativeLayout.LayoutParams(
                RelativeLayout.LayoutParams.MATCH_PARENT, // Width of TextView
                RelativeLayout.LayoutParams.WRAP_CONTENT); // Height of TextView
        tv.setLayoutParams(lp);
        tv.setText(R.string.vegetable_corner); // ActionBar title text
        tv.setTextSize(22);
        tv.setTextColor(Color.BLACK);
        tv.setTextAlignment(View.TEXT_ALIGNMENT_CENTER);
        tv.setTypeface(typeface);
        /*Drawable backArrow = getResources().getDrawable(R.drawable.ic_view_headline);
        backArrow.setColorFilter(getResources().getColor(R.color.grad1), PorterDuff.Mode.SRC_ATOP);*/
        actionBar.setCustomView(tv);
        /*actionBar.setHomeAsUpIndicator(backArrow);*/
        actionBar.setDisplayOptions(ActionBar.DISPLAY_SHOW_CUSTOM);
        setContentView(R.layout.activity_vegetable);
        tomato = findViewById(R.id.tomato);
        tomato.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                showBottomSheetDialogFragment();
            }
        });
    }
    public void showBottomSheetDialogFragment() {
        BottomSheetFragment bottomSheetFragment = new BottomSheetFragment();
        bottomSheetFragment.show(getSupportFragmentManager(), bottomSheetFragment.getTag());
    }
}
